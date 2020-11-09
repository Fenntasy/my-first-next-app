import Link from "next/link"
import Head from "next/head"

export default function Game() {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>List of Games</title>
      </Head>
      <div className="row">
        <div className="col">
          <h1>Game</h1>
          <div className="jumbotron">
            Here are our games
          </div>
          <Link href="/games/hades">
            Hades
          </Link>
        </div>
      </div>
    </div>
  )
}
