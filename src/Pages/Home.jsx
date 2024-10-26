import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="">
            <h1 className=" text-3xl sm:text-4xl md:text-5xl text-center font-bold text-cyan-500 py-14"> Love Language Test </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 m-auto">

                <div className="order-2 md:order-1 mt-10 ">
                    <h1 className=" text-2xl sm:text-3xl">What is Love Language</h1>
                    <p className=" pt-10 text-base sm:text-lg">
                        A love language refers to the way individuals express and receive love in relationships. The concept was popularized by Dr. Gary Chapman in his book "The 5 Love Languages", where he identified five distinct ways people tend to give and feel love. Understanding your own and your partner’s love language can help improve communication and deepen emotional connection.
                    </p>

                    <Link
                        to={'/quiz'}
                        className=" bg-black mt-5 sm:mt-10 rounded-md border border-white py-3 px-4 inline-flex items-center text-center text-base transition-all text-white hover:bg-zinc-900">
                        Start Test
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1.5">
                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </Link>

                </div>
                <div className="order-1 md:order-2 flex items-center">
                    <img src="https://bayareacbtcenter.com/wp-content/uploads/2024/08/Untitled-design-202-1024x791.png" alt="5lovelanguage" />
                </div>

            </div>

            <div className=" w-5/6 m-auto mt-20">
                <h1 className=" text-2xl sm:text-3xl"> 5 Love Language</h1>
                <p className=" pt-10 text-base sm:text-lg">The five love languages are:</p>

                <ul className="mt-5 space-y-4">
                    <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3 mt-1"></span>
                        <div>
                            <b className="font-semibold text-gray-800">Words of Affirmation:</b>
                            <p className="text-gray-600 mt-1">Expressing love through spoken or written words, such as compliments, encouragement, or kind words.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-3 mt-1"></span>
                        <div>
                            <b className="font-semibold text-gray-800">Acts of Service:</b>
                            <p className="text-gray-600 mt-1">Showing love by doing helpful things for the other person, like running errands, cooking a meal, or taking care of responsibilities.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-3 mt-1"></span>
                        <div>
                            <b className="font-semibold text-gray-800">Receiving Gifts:</b>
                            <p className="text-gray-600 mt-1">Giving or receiving physical tokens of affection, where the thought behind the gift matters more than the cost.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-3 mt-1"></span>
                        <div>
                            <b className="font-semibold text-gray-800">Quality Time:</b>
                            <p className="text-gray-600 mt-1">Spending meaningful time together, giving your full attention to the other person without distractions.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-3 mt-1"></span>
                        <div>
                            <b className="font-semibold text-gray-800">Physical Touch:</b>
                            <p className="text-gray-600 mt-1">Expressing love through physical affection, like hugs, kisses, or holding hands.</p>
                        </div>
                    </li>
                </ul>

            </div>

            <footer className="bg-gray-200 text-center py-4 mt-10">
                <p className="text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} <a className=" underline" href="https://github.com/felixkai34" target="_blank">Felix Kai</a> . All rights reserved.
                </p>
            </footer>

        </main>
    )
}