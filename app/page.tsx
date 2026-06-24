export default async function Home() {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-emerald-500">Welcome to Rorn System</h1>
      <p className="mt-4 text-lg">
        This is the home page. for testing update 123
      </p>

      <div>

        <h2 className="text-2xl font-bold text-emerald-500 mt-8">API Test</h2>
        <ul className="mt-4">
          {data.map((post: any) => (
            <li key={post.id} className="mb-2 border-b border-gray-300 pb-2">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>

      </div>
    </main>
  );
}