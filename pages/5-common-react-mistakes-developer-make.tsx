import Link from "next/link";
import React from "react";
import Head from "next/head";

export default function Blog1() {
    // Add schema markup for blog post
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "5 Common React.js Mistakes Developers Make",
        "author": {
            "@type": "Person",
            "name": "Piyush Chauhan"
        },
        "datePublished": "2025-03-27",
        "description": "Learn about common React.js mistakes including state management, list keys, useEffect usage, performance optimization, and event handling. Improve your React development skills.",
        "keywords": "React.js, React mistakes, React development, useState, useEffect, React performance, React best practices"
    };

    return (
        <>
            <Head>
                <title>5 Common React.js Mistakes Developers Make | React Development Tips</title>
                <meta name="description" content="Discover the 5 most common React.js mistakes developers make and learn how to avoid them. Improve your React development skills with practical solutions." />
                <meta name="keywords" content="React.js, React mistakes, React development, useState, useEffect, React performance, React best practices" />
                <meta property="og:title" content="5 Common React.js Mistakes Developers Make" />
                <meta property="og:description" content="Learn about common React.js mistakes and their solutions to write better React applications." />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold  mb-8">
                        5 Common React.js Mistakes Developers Make
                    </h1>

                    <div className="flex items-center space-x-4 text-gray-300 mb-12">
                        <span>📅 March 27, 2025</span>
                        <span>✍️ By Piyush Chauhan</span>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                        <p className="mb-6">
                            React.js is one of the most popular JavaScript libraries for building dynamic web applications.
                            However, even experienced developers make common mistakes that can lead to performance issues,
                            unexpected bugs, and maintainability problems.
                        </p>

                        <div className="space-y-12">
                            {/* Mistake 1 */}
                            <section>
                                <h3 className="text-xl font-semibold mb-4">1️⃣ Directly Modifying State Instead of Using setState</h3>
                                <div className="bg-gray-800 p-6 rounded-lg mb-4">
                                    <h4 className="text-red-400 mb-2">❌ The Problem</h4>
                                    <p className="mb-4">Many developers mistakenly modify state directly instead of using setState, leading to unpredictable behavior and UI not updating correctly.</p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`const [user, setUser] = useState({ name: "John", age: 25 });

// ❌ Incorrect: Directly modifying state
user.age = 26;
console.log(user.age); // Will not trigger a re-render`}</code>
                                    </pre>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-green-400 mb-2">✅ The Solution</h4>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`const updateAge = () => {
  setUser((prevUser) => ({ ...prevUser, age: 26 })); // ✅ Correct way
};`}</code>
                                    </pre>
                                </div>
                            </section>

                            {/* Mistake 2 */}
                            <section>
                                <h3 className="text-xl font-semibold mb-4">2️⃣ Not Using Keys in Lists</h3>
                                <div className="bg-gray-800 p-6 rounded-lg mb-4">
                                    <h4 className="text-red-400 mb-2">❌ The Problem</h4>
                                    <p className="mb-4">When rendering lists in React, forgetting to add a unique key causes React to re-render all items unnecessarily, leading to performance issues.</p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`{todos.map((todo) => (
  <li>{todo.text}</li> // ❌ Missing key
))}
`}</code>
                                    </pre>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-green-400 mb-2">✅ The Solution</h4>
                                    <p className="mb-4">Always use a unique key (usually id) when mapping lists:</p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`const updateAge = () => {
  setUser((prevUser) => ({ ...prevUser, age: 26 })); // ✅ Correct way
};`}</code>
                                    </pre>

                                </div>
                            </section>

                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h4 className="text-green-400 mb-2">
                                    <Link
                                        href="https://reactjs.org/docs/lists-and-keys.html#keys"
                                        className="text-indigo-500"
                                        target="_blank"
                                    >
                                        🔹 Why? React uses keys to identify items efficiently, preventing unnecessary re-renders.


                                    </Link>
                                </h4>
                            </div>

                            {/* Mistake 3 */}
                            <section>
                                <h3 className="text-xl font-semibold mb-4">3️⃣ Fetching Data Incorrectly in useEffect
                                </h3>
                                <div className="bg-gray-800 p-6 rounded-lg mb-4">
                                    <h4 className="text-red-400 mb-2">❌ The Problem</h4>
                                    <p className="mb-4">Many developers forget to clean up API calls, leading to memory leaks and unnecessary re-renders.
                                    </p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`useEffect(() => {
  fetch("/api/data")
    .then((res) => res.json())
    .then(setData);
}, []); // ❌ No cleanup, might cause issues
`}</code>
                                    </pre>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-green-400 mb-2">✅ The Solution</h4>
                                    <p className="mb-4">Use useEffect cleanup functions or AbortController to prevent unnecessary API calls.

                                    </p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`useEffect(() => {
  const controller = new AbortController();
  
  fetch("/api/data", { signal: controller.signal })
    .then((res) => res.json())
    .then(setData)
    .catch((err) => console.error(err));

  return () => controller.abort(); // ✅ Cleanup API call
}, []);
`}</code>
                                    </pre>
                                </div>
                            </section>

                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h4 className="text-green-400 mb-2">
                                    <Link
                                        href="https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup"
                                        className="text-indigo-500"
                                        target="_blank"
                                    >
                                        🔹 Why? Prevents memory leaks and cancels pending API requests if the component unmounts.

                                    </Link>
                                </h4>
                            </div>

                            {/* Mistake 4 */}
                            <section>
                                <h3 className="text-xl font-semibold mb-4">4️⃣ Not Memoizing Expensive Computations
                                </h3>
                                <div className="bg-gray-800 p-6 rounded-lg mb-4">
                                    <h4 className="text-red-400 mb-2">❌ The Problem</h4>
                                    <p className="mb-4">When performing expensive computations inside a component, React recomputes them on every render, slowing down performance.</p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`const total = numbers.reduce((acc, num) => acc + num, 0);
// ❌ Recomputed on every render
`}</code>
                                    </pre>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-green-400 mb-2">✅ The Solution</h4>
                                    <p className="mb-4">Use useMemo to memoize the computation:</p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`const total = useMemo(() => numbers.reduce((acc, num) => acc + num, 0), [numbers]); 
// ✅ Cached result
`}</code>
                                    </pre>
                                </div>
                            </section>

                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h4 className="text-green-400 mb-2">
                                    <Link
                                        href="https://reactjs.org/docs/hooks-reference.html#usememo"
                                        className="text-indigo-500"
                                        target="_blank"
                                    >🔹 Why? Prevents unnecessary calculations, improving performance.

                                    </Link>
                                </h4>
                            </div>

                            {/* Mistake 5 */}
                            <section>
                                <h3 className="text-xl font-semibold mb-4">5️⃣ Using useEffect for State Updates Instead of Event Handlers</h3>
                                <div className="bg-gray-800 p-6 rounded-lg mb-4">
                                    <h4 className="text-red-400 mb-2">❌ The Problem</h4>
                                    <p className="mb-4">Some developers update state inside useEffect when it should be handled in an event function, leading to unnecessary re-renders.</p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`useEffect(() => {
  if (newValue) {
    setState(newValue); // ❌ Not efficient
  }
}, [newValue]);
`}</code>
                                    </pre>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-green-400 mb-2">✅ The Solution</h4>
                                    <p className="mb-4">Use event handlers instead:</p>
                                    <pre className="bg-gray-900 p-4 rounded">
                                        <code>{`const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setState(event.target.value); // ✅ More efficient
};
`}</code>
                                    </pre>
                                </div>
                            </section>

                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h4 className="text-green-400 mb-2">
                                    <Link
                                        href="https://reactjs.org/docs/hooks-reference.html#useeffect"
                                        className="text-indigo-500"
                                        target="_blank"
                                    >
                                        🔹 Why? Keeps logic cleaner and prevents extra renders.

                                    </Link>
                                </h4>
                            </div>


                            <section className="mt-12">
                                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                                <p className="mb-6">
                                    By avoiding these common mistakes, you can make your React applications faster,
                                    more reliable, and easier to maintain.
                                </p>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">💡 Key Takeaways:</h3>
                                    <ul className="list-none space-y-2">
                                        <li>✅ Use setState properly instead of modifying state directly.</li>
                                        <li>✅ Always use keys when rendering lists.</li>
                                        <li>✅ Clean up API requests in useEffect.</li>
                                        <li>✅ Optimize performance using useMemo.</li>
                                        <li>✅ Use event handlers instead of useEffect for state updates.</li>
                                    </ul>
                                </div>
                            </section>

                            <div className="text-center mt-8">
                                <p className="text-xl">🚀 Want to level up your React skills? Follow me for more React.js & Next.js tips!</p>
                                <div className="flex justify-center mt-4">
                                    <Link href="https://linkedin.com/in/piyushchauhan30" target="_blank">
                                        <h1 className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-md font-medium transition-colors">
                                            Connect on LinkedIn
                                        </h1>
                                    </Link>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <Link href="https://instagram.com/piyush___chauhan_" target="_blank">
                                        <h1 className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-md font-medium transition-colors">
                                            Follow on Instagram
                                        </h1>
                                    </Link>
                                </div>
                                <div className="mt-6 p-6 bg-gray-800 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Need Help with React Projects?</h3>
                                    <p>
                                        I specialize in React.js, Next.js, and MERN stack development.
                                        If you're looking for a skilled developer, feel free to connect with me! 😊
                                    </p>
                                </div>
                            </div>

                            {/* comment section */}
                            {/* <section className="mt-12">
                                <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">📝 Leave a Comment</h3>
                                    <form className="space-y-4">
                                        <div className="flex flex-col md:flex-row md:space-x-4">
                                            <input 
                                                type="text" 
                                                placeholder="Name" 
                                                className="bg-gray-700 p-3 rounded-md w-full"
                                            />
                                            <input 
                                                type="email" 
                                                placeholder="Email" 
                                                className="bg-gray-700 p-3 rounded-md w-full"
                                            />
                                        </div>
                                        <textarea 
                                            placeholder="Comment" 
                                            className="bg-gray-700 p-3 rounded-md w-full"
                                        />
                                        <button 
                                            type="submit" 
                                            className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
                                        >
                                            Post Comment
                                        </button>
                                    </form>
                                </div>
                            </section> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}