import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, description } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "A valid amount is required." }, { status: 400 });
    }

    // Stripe integration
    // To enable payments:
    // 1. Install stripe: npm install stripe
    // 2. Set STRIPE_SECRET_KEY in your environment variables
    // 3. Uncomment the code below

    /*
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-12-18.acacia",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: description || "Toroni & Company - Consulting Services",
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.nextUrl.origin}/contact?payment=success`,
      cancel_url: `${req.nextUrl.origin}/contact?payment=cancelled`,
    });

    return NextResponse.json({ url: session.url });
    */

    // Placeholder response until Stripe is configured
    return NextResponse.json({
      message: "Stripe integration is ready. Set STRIPE_SECRET_KEY in environment variables and uncomment the code in src/app/api/stripe/route.ts to enable payments.",
    });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Payment processing error" }, { status: 500 });
  }
}
