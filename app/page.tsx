'use client';

import useFetchContens from "@/_libs/hooks/useFetchContens.hooks";
import parse from "html-react-parser";
import { Suspense } from "react";

const Home = () => {
  const endpoint = 'blog';

  const {isLoading, response, hasError, errorMessage} = useFetchContens(endpoint);

  if (isLoading) {
    return (
      <p>Now Loading...</p>
    )
  }
  if (hasError) {
    return (
      <p>{errorMessage}</p>
    )
  }

  return (
    <>
      <h1>This is Home</h1>
      <Suspense>
        {response.contents && response.contents.map((item:any, key:number) => (
          <article key={key}>
            <h3>{item.title}</h3>
            <time>{item.publishedAt}</time>
            <div>{parse(item.content)}</div>
            {item.categories ? (
              item.categories.map((category: string, key: number) => (
                <div key={key}>{category}</div>
              ))
            ) : null}
          </article>
        ))}
      </Suspense>
    </>
  );
}

export default Home;