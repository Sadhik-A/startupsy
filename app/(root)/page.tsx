import React from "react";
import { SearchForm } from "../../components/SearchForm";
import StartupCard from "@/components/startupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const posts = [
    {
      _id: "1",
      title: "Startup 1",
      _createdAt: "2023-01-01",
      author: {
        _id: "1",
        name: "John Doe",
        image: "https://placehold.co/600x400",
      },
      views: 10,
      description: "Description 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojIz7URR3dOz-9q0AwewTtL0ZJjycjUhU4w&s",
      category: "Category 1",
    },
  ];
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect With Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Showing results for ${query}` : "Trending Pitches"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post, index) => (
              <StartupCard key={post?._id} post={{ ...post, id: index }} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
