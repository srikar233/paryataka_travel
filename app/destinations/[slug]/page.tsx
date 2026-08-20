
import Footer from '@/components/footer';

export default async function Destination({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const res1 = await fetch('https://paryataka-be.onrender.com/api/packages/public');
  const data1 = await res1.json();
  const actualdata = data1?.data?.items || [];
  const filteredData = actualdata.filter(
    (item: any) => item.slug === slug || item._id === slug
  );

  return (
    <>
      <div>
        <div className="firstpart">
          <div className="searchbardestination">
            <input type="text" className="searchinputdestination" />
            <div>
              <button>Search Package</button>
              <button>Reset</button>
            </div>
          </div>
        </div>

        <div
          className="secondpart"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          {(filteredData.length ? filteredData : actualdata).map((item: any) => (
            <div className="destination-card" key={item._id}>
              <img src={item.thumbnailImage} alt={item.name || ''} />
            </div>
          ))}
        </div>
        <div>
            <Footer />
        </div>
      </div>
    </>
  );
}