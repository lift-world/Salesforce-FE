'use client';

import Link from 'next/link';

export default function Home() {
	console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
	return <div>
		<h1 className="py-10 mb-10 text-5xl text-center">Salesforce Login</h1>
		<Link href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`} className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-10 font-bold">
			SalesForce With Login
		</Link>
	</div>
		
}
