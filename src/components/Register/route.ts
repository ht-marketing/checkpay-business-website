import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, shortName, businessName, companyName, customerType } = await request.json();
    
    // Construct the fullname
    const fullname = `${firstName} ${lastName}`.trim();
    
    // Decide what to use for displayName based on customer type
    const displayName = customerType === 'individual' ? businessName : companyName;
    
    // Prepare the payload for the external API
    const payload = {
      fullname,
      email,
      phone,
      displayName,
      domainName: shortName
    };

    // Call the external API
    const response = await fetch(`${process.env.BACKEND_API_URL}/api/auth/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: 'Internal server error', statusCode: 500 },
      { status: 500 }
    );
  }
}
