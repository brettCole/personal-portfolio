import React from 'react';
import 'bulma/css/bulma.css';
import NavbarAndMenu from '../components/NavbarAndMenu';
import BlogProfilePic from '../components/BlogProfilePic';
import AllBlogs from '../components/AllBlogs';
import SnapToTopOfPage from '../components/SnapToTopOfPage';
import Footer from '../components/Footer';

const BlogPage = () => {
  return (
    <>
      <NavbarAndMenu />
      <BlogProfilePic />
      <AllBlogs />
      <SnapToTopOfPage />
      <Footer />
    </>
  )
}

export default BlogPage;