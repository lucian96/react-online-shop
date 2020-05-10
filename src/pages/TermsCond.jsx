import React from 'react';
import Layout from '../components/Layout/Layout';

function Terms() {
    return(
        <Layout>
            {/*Pentru a lua proprietatea din layout.css conform careia div-ul din layout va ocupa tot spariul ramas, am adaugat un div in componenta layout */}
            <div className="container-fluid container-min-max-width">
                <p>Terms</p>
            </div>
            
        </Layout>
    )
}

export default Terms;