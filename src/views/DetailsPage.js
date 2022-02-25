import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import Loader from 'components/atoms/Loader';
import Error from 'components/atoms/Error';
import { CardBig } from 'components/molecules/Card';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { useFetchDetailsData } from 'customHooks';

const DetailsPage = pageContext => {
  const { id } = useParams();
  const { data: itemData } = useFetchDetailsData(id);

  console.log('ID and itemData - ', id, itemData);

  return (
    <DetailsPageTemplate>
      {itemData.status === 'loading' ? (
        <Loader />
      ) : itemData.status === 'error' ? (
        <Error reloadButton />
      ) : (
        <CardBig itemData={itemData} />
      )}
    </DetailsPageTemplate>
  );
};

DetailsPage.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'books', 'quotes']),
};

export default withContext(DetailsPage);

// const DetailsPage = pageContext => {
//   const endpoint = pageContext.location.pathname;

//   const { itemData } = useFetchDetailsData(endpoint);
//   console.log(itemData)
//   const history = useHistory();

//   return (
//     <>
//       <DetailsPageTemplate>
//         {itemData.status === 'loading' ? (
//           <Loader />
//         ) : itemData.status === 'error' ? (
//           <Error reloadButton />
//         ) : (
//           <>
//             {itemData &&
//               [itemData.data].map((item, index) => (
//                 <CardBig key={item.id} item={item} index={index} endpoint={endpoint} />
//               ))}

//             <Button
//               onClick={() => {
//                 history.goBack();
//               }}
//             >
//               Back
//             </Button>
//           </>
//         )}
//       </DetailsPageTemplate>
//     </>
//   );
// };

// DetailsPage.propTypes = {
//   pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'books', 'quotes']),
// };

// export default withContext(DetailsPage);

// const table = base('books');

// useEffect(() => {
//   const getRecordById = async id => {
//     const record = await table.find(id);
//   console.log('getRecordById:', record)
//   }
//   return getRecordById();
// })

// export default getRecordById;
