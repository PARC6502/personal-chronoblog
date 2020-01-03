import React from 'react';
import styled from '@emotion/styled'
import Masonry from 'react-masonry-css'

const GridContainer = styled(Masonry)`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
`

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1023: 2,
  767: 1
};

function FeedGrid({ children }) {
  return (
    <GridContainer
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {children}
    </GridContainer>
  )
}

// const FeedGrid = ({ children }) => {
//   React.Children.map(children, child => console.log(child));
//   // return (<FeedItems />);
//   return (
//     <Grid columns={3}>
//       {children}
//     </Grid>
//   )
// }

export default FeedGrid;