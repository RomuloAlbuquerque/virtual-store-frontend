import './styles.css';

const LoaderCatalog = () => {
  return (
    <div className="loader-container">
      <div className="loader-circle-left loader-circle animation">
        <div className="loader-circle-bottom loader-circle animation">
          <div className="loader-circle-right loader-circle animation">
            <div className="loader-circle-top loader-circle animation">
              <div className="loader-circle-left loader-circle animation">
                <div className="loader-circle-bottom loader-circle animation">
                  <div className="loader-circle-right loader-circle animation">
                    <div className="loader-circle-top loader-circle animation">
                      <div className="loader-circle-left loader-circle animation">
                        <div className="loader-circle-bottom loader-circle animation">
                          <div className="loader-circle-right loader-circle animation">
                            <div className="loader-circle-top loader-circle animation">
                              <div className="loader-circle-left loader-circle animation">
                                <div className="loader-circle-bottom loader-circle animation">
                                  <div className="loader-circle-right loader-circle animation">
                                    <div className="loader-circle-top loader-circle animation"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderCatalog;

// import ContentLoader from 'react-content-loader';
// import './styles.css'

// const LoaderCatalog = () => (
//   <div className="loader-container">
//     <ContentLoader
//       speed={1}
//       width={400}
//       height={150}
//       viewBox="0 0 400 30"
//       backgroundColor="#a3f3f3"
//       foregroundColor="#ecebeb"
//     >
//       <rect x="0" y="0" rx="3" ry="3" width="300" height="300" />
//     </ContentLoader>
//   </div>
// );

// export default LoaderCatalog;
