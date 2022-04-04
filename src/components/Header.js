import React from "react";
import '../App.css';

// import images
import Self from '../assets/images/self.png';

const styles = {
    imgStyle: {
        height: "25rem",
         width: "25rem"
    }
}


function Header () {
    return (
        <>

        {/* // <!-- right section featuring web development blurb --> */}
        <section className="py-5 container">
            {/* <!-- row div --> */}
            <div className="row justify-content-between pb-lg-5 pb-md-4 pb-md-3 ">
                {/* <!-- left column with headshot photo --> */}
                <div className="col-lg-8 col-md-7 col-6 ">
                    <img src={Self} className=" float-start img-fluid" alt="Photo Headshot of Lo Selby" style={styles.imgStyle}/>
                </div>

                {/* <!-- right column featuring web development blurb --> */}
                <div className="col-lg-4 col-md-5 col-6 float-end text-center">
                <h1 className="fw-bold text-light mt-4 fs-sm-1 ">Aspiring Web Developer</h1>
                <p className="lead text-muted">Full-Stack experience working with object-orientated programming, HTML, CSS, SQL, Node.js, Web & Server Side APIs, Sequelize, Handlebars and various frameworks such as jQuery, Bootstrap, and, Express. Proficiency in project management and user documentation. </p>
                <p/>
              </div>
              {/* <!-- end row --> */}
            </div>
          </section>


          </>


    );
}

export default Header;