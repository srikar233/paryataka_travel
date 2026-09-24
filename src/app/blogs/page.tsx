import '../blogs/page.css';
import { API_ENDPOINTS, REVALIDATE_TIMES } from '@/config/constants';
import { fetchAPI } from '@/lib/api';
import Footer from '@/components/layout/Footer';

export default async function BlogsPage() {
  const blogs = await fetchAPI(API_ENDPOINTS.BLOGS, {
    revalidate: REVALIDATE_TIMES.HOME,
  });

  console.log(blogs);

  const featuredBlog = blogs.data?.[0];
  const remainingBlogs = blogs.data?.slice(1);

  return (
    <>
    <div>
      <div className='picture'>srikar</div>
    </div>
    <div>
              <div className="search-wrapper">
                <div className="search-container">
                  <input
                      type="text"
                      placeholder="Search stories..."
                      className="search-input"
                  />
                  <input type="text" placeholder='All Categories'/>
                  <input type="text" />
                </div>
             </div>
    </div>
    <div>
    <div className="blogs-page">

      {/* ================= FEATURED BLOG ================= */}
      {featuredBlog && (
        <div className="featured-blog">

          {/* Featured Image */}
          <div className="featured-image-container">
            <img
              src={featuredBlog.heroImage}
              alt={featuredBlog.title}
              className="featured-image"
            />
          </div>

          {/* Featured Content */}
          <div className="featured-content">

            <span className="featured-label">
              FEATURED STORY
            </span>

            <h1 className="featured-title">
              {featuredBlog.title}
            </h1>

            <p className="featured-description">
              Read our detailed travel guide and stories about{' '}
              {featuredBlog.title}
            </p>

            <div className="featured-bottom">

              <div className="featured-author">

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
                  alt={featuredBlog.authorInfo?.name || 'Author'}
                  className="featured-author-image"
                />

                <div>
                  <p className="featured-author-name">
                    {featuredBlog.authorInfo?.name || 'Teja Chalasani'}
                  </p>

                  <span className="featured-date">
                    Jun 26, 2026 · 8 min read
                  </span>
                </div>

              </div>

              <button className="featured-read-button">
                Read <span>→</span>
              </button>

            </div>

          </div>

        </div>
      )}

      {/* ================= BLOG GRID ================= */}
      <div className="blog-grid">

        {remainingBlogs?.map((item: any) => (
          <div className="blog-card" key={item._id}>

            {/* Image */}
            <div className="blog-image-container">

              <img
                src={item.heroImage}
                alt={item.title}
                className="blog-image"
              />

              <span className="blog-category">
                {item.category || 'TRAVEL'}
              </span>

            </div>

            {/* Content */}
            <div className="blog-content">

              <h2 className="blog-title">
                {item.title}
              </h2>

              <p className="blog-description">
                Read our detailed travel guide and stories about{' '}
                {item.title}.
              </p>

              {/* Author / Read time */}
              <div className="blog-bottom">

                <div className="blog-author">

                  <span className="blog-by">
                    By
                  </span>

                  <span className="blog-author-name">
                    {item.authorInfo?.name || 'Teja Chalasani'}
                  </span>

                </div>

                <span className="blog-read-time">
                  8 min read
                </span>

              </div>

              {/* Read Article */}
              <button className="read-article-button">
                Read Article
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
     <div><Footer /></div>
     </div>
     </>
  );
}