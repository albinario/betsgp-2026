import { NextResponse } from 'next/server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
	try {
		const { data, error } = await resend.emails.send({
			from: 'from@speedwayfantasy.com',
			to: 'albin.lindeborg@gmail.com',
			subject: 'Test from SGP Fantasy API',
			html: '<p>Congrats on sending your <strong>first email</strong> from the env route!</p>',
		})

		if (error) {
			return NextResponse.json({ error }, { status: 400 })
		}

		return NextResponse.json({
			emailSent: true,
			emailId: data?.id,
		})
	} catch (err) {
		return NextResponse.json({ error: String(err) }, { status: 500 })
	}
}
