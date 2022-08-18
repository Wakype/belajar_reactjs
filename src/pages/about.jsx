import React from "react";
import { Route, Routes, Switch, NavLink, Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <section className="space-x-10">
        <Link to={'/about/1'}>1</Link>
        <Link to={'/about/2'}>2</Link>
        <Link to={'/about/3'}>3</Link>
      </section>
      <h1>ini about</h1>
    </div>
  );
}
