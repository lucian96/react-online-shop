import React from 'react';
import Layout from '../components/Layout';

function About() {
    return(
        <Layout>
            {/* Pentru a lua proprietatea din layout.css conform careia div-ul din layout va ocupa tot spariul ramas, am adaugat un div in componenta layout
            container-fluid container-min-max-width* au fost adaugate pentru a avea dimensiunile paginii principale */}
            <div className="container-fluid container-min-max-width">
                <p>About</p>
            </div>
            
        </Layout>
            
    )
}

export default About;