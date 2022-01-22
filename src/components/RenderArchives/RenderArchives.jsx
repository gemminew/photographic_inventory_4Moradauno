import React from 'react';
import './renderArchives.css'

 const RenderArchives = () => {

  return (
    <div className='render-container'>
    <div className='render-tittle'>
      <h1> Casa Lomas</h1>
      <h2>15634634</h2>
      </div>
        
      <div className='carousel-container'>
        <h3>Baño</h3>
          <img id="img-logo" /* src={comedor} */ alt="img" className="logo-img" with ="100px" height="70"/>
          <h3>Cocina</h3>
          <img id="img-logo" /* src={comedor} */ alt="img" className="logo-img" with ="100px" height="70"/>
        </div>
        <div className='render-btns'>
          <button > Atrás </button>
          <button > Siguiente </button>
        </div> 
    
    </div>
  );
}


export default RenderArchives;




// {/* <Box
// sx={{
//   display: 'grid',
//   gridTemplateColumns: 'repeat(4, 1fr)',
//   gap: 5,
//   gridTemplateRows: 'auto',
//   gridTemplateAreas: `"header header . sidebar"
//   "main main main main"`,
// }}
// >
// <Box sx={{ gridArea: 'header' }}>Casa Lomas</Box>
// <Box sx={{ gridArea: 'sidebar' }}>3465756</Box>
// <Box sx={{ gridArea: 'main', bgcolor: 'warning.dark' }}>Footer</Box>
// </Box> */}
