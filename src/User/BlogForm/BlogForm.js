import React, { useState } from 'react';
import './BlogForm.css';
import UserHeader from '../UserHeader/UserHeader';
import { Link } from 'react-router-dom';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    tag: '',
    image: null,
    description: '',
    seoTitle: '',
    seoDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className='blogForm-container'>
      <div><UserHeader /></div>
      <div className='blogForm-Holder'>
        <div className='blogBack'><Link to='/myBlog'><button>Back</button></Link></div>
        <div className='BlogForm'>
          <form onSubmit={handleSubmit}>
            <label>
              Title<span style={{ color: "red" }}>*</span><br/>
            </label>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
            /><br/>
            <label>Slug</label><br/>
            <input
              type='text'
              name='slug'
              value={formData.slug}
              onChange={handleChange}
            /><br/>
            <label>Tag</label><br/>
            <input
              type='text'
              name='tag'
              value={formData.tag}
              onChange={handleChange}
            /><br/>
            <label>Image</label><br/>
            <input
              type='file'
              name='image'
              onChange={handleFileChange}
            /><br/>
            <label>Description</label><br/>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleChange}
            /><br/>
            <label>Seo Title</label><br/>
            <input
              type='text'
              name='seoTitle'
              value={formData.seoTitle}
              onChange={handleChange}
            /><br/>
            <label style={{marginTop:"10px"}}>Seo Description</label><br/>
            <input
              type='text'
              name='seoDescription'
              value={formData.seoDescription}
              onChange={handleChange}
            /><br/>
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
