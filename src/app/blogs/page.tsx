import '../blogs/page.css';
import { API_ENDPOINTS, REVALIDATE_TIMES } from '@/config/constants';
import { fetchAPI } from '@/lib/api';

export default async function BlogsPage() {
  const blogs = await fetchAPI(API_ENDPOINTS.BLOGS, {
    revalidate: REVALIDATE_TIMES.HOME,
  });

  console.log(blogs);

  return (
    <>
      <div>
        <div className="firstportion">
          image
        </div>
      </div>

      <div>
        <div>
            <p>srikar</p>
        </div>
      </div>

      <div></div>
    </>
  );
}