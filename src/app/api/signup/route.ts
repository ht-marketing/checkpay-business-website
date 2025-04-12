import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, shortName, businessName, companyName, customerType } = await request.json();
    
    // Construct the fullname
    const fullname = `${firstName} ${lastName}`.trim();
    
    // Decide what to use for displayName based on customer type
    const displayName = customerType === 'individual' ? businessName : companyName;
    
    // Map customerType to orgType
    const orgType = customerType === 'individual' ? 'INDIVIDUAL' : 'ORGANIZATION';
    
    // Prepare the payload for the external API
    const payload = {
      fullname,
      email,
      phone,
      displayName,
      domainName: shortName,
      orgType
    };

    // Add request options with SSL certificate verification disabled for development
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    // Call the external API
    const response = await fetch(`${process.env.BACKEND_API_URL}/api/auth/sign-up`, requestOptions);

    // Handle non-JSON responses
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error('Non-JSON response:', text);
      data = { message: 'Server returned non-JSON response' };
    }
    
    console.log('Backend response:', data, 'Status:', response.status);

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    
    // More detailed error handling
    let errorMessage = 'Internal server error';
    if (error instanceof Error) {
      errorMessage = `Error: ${error.message}`;
      
      // Check for specific SSL errors
      if (error.message.includes('SSL') || error.message.includes('certificate')) {
        errorMessage = 'SSL connection error. Check if the server URL is correct and using the proper protocol (http/https).';
      }
    }
    
    return NextResponse.json(
      { message: errorMessage, statusCode: 500 },
      { status: 500 }
    );
  }
}
