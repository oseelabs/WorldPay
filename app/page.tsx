
export default function Home() {
    return (
      <div
        className="
          flex min-h-screen min-w-full flex-col items-center justify-center
        "
      >
          <header
            className="
              flex flex-col items-center justify-center gap-y-3
              w-max p-2 top-1
              bg-pink-100 dark:bg-pink-100
            "
          >
            <h1
              className="text-3xl font-bold flex flex-wrap text-balance"
            >
                Welcome to WorldPay
            </h1>
            <p
              className="text-lg"
            >
                The future of world payments
            </p>
          </header>
          <main
            className="
              flex flex-col flex-grow items-center justify-center p-2 gap-y-3
              text-center text-balance
              bg-blue-200 dark:bg-blue-100
             "
          >
            <p className="text-lg">
                Get started by signing in with Worldcoin
            </p>
            <button
              className="
                bg-pink-500 dark:bg-pink-500
                text-white dark:text-white
                p-2 rounded-md
                hover:bg-pink-600 dark:hover:bg-pink-600
                focus:outline-none
                focus:ring-2 focus:ring-pink-500
              "
            >
              Sign in with Worldcoin
            </button>
          </main>
      </div>
    );
}
