'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SalesWithLoginPage: React.FC = () => {
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
			fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`) // Ensure CORS is handled in BE  
				.then((res) => res.json())
				.then((data) => {setUser(data)})
				.catch(err => console.error(err));
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			{user ? <>
				<h1 className="py-10 mb-10 text-5xl">
					Welcome
				</h1>
				<h2>Email: {user.email}</h2>
				<h2>ID: {user.id}</h2>
				<h2>Name: {user.userId}</h2>
				<Link href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`} className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-10 font-bold">
					Logout
				</Link></>:""
			}
		</div>
	);
}

export default SalesWithLoginPage;  