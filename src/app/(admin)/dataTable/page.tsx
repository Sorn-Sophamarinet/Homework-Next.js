"use client";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

type Movie = {
  id: number;
  title: string;
  year: string;
};
const columns: TableColumn<Movie>[] = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    omit:true
  },
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data: Movie[] = [
  { id: 1, title: "Spider-Man: No Way Home", year: "2021" },
  { id: 2, title: "Top Gun: Maverick", year: "2022" },
  { id: 3, title: "Black Panther: Wakanda Forever", year: "2022" },
  { id: 4, title: "Doctor Strange in the Multiverse of Madness", year: "2022" },
  { id: 5, title: "Minions: The Rise of Gru", year: "2022" },
  { id: 6, title: "Thor: Love and Thunder", year: "2022" },
  { id: 7, title: "Jurassic World Dominion", year: "2022" },
  { id: 8, title: "Avatar: The Way of Water", year: "2022" },
  { id: 9, title: "The Batman", year: "2022" },
  { id: 10, title: "Lightyear", year: "2022" },
  { id: 11, title: "Sonic the Hedgehog 2", year: "2022" },
  { id: 12, title: "Morbius", year: "2022" },
  { id: 13, title: "Fantastic Beasts: The Secrets of Dumbledore", year: "2022" },
  { id: 14, title: "The Northman", year: "2022" },
  { id: 15, title: "Everything Everywhere All at Once", year: "2022" },
  { id: 16, title: "Scream", year: "2022" },
  { id: 17, title: "The Lost City", year: "2022" },
  { id: 18, title: "Turning Red", year: "2022" },
  { id: 19, title: "Encanto", year: "2021" },
  { id: 20, title: "Dune", year: "2021" },
]

// A super simple expandable component.
const ExpandedComponent = ({ data }: { data: Movie }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

export default function AdminDashboard() {
    const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  

  // Handle search with raw data
  useEffect(() => {
      const filtered = data.filter((data) =>
          `${data.title}`.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filtered);
  },[search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 mt-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <DataTable
        title="Movies List"
        columns={columns}
        data={filteredMovies}
        selectableRows
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        pagination
      />
    </div>
  );
}
