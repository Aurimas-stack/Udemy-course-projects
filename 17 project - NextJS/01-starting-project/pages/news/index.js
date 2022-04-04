import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/asd">asd</Link>
        </li>
        <li>
          <Link href="/news/blabla">blabla</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
