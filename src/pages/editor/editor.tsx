import PreviewComponent from '@components/PreviewComponent/previewComponent';
import styles from './index.module.css';
import Sidebar from '@components/SideBar/sidebar';

function Editor() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.backgroundContainer}></div>
      <div className={styles.appContainer}>
        <div className={
          styles.traslucid 
          + ' ' + 
          styles.traslucidStrong 
          + ' ' +  
          styles.primaryNav
          + ' ' + 
          styles.radiusLeft
          + ' ' + 
          styles.radiusRight
          }>
          <div className={styles.radiusLeftBorder + ' ' + styles.size65}></div>
          <span className={styles.icon + " material-symbols-outlined"}>
            play_circle
          </span>
          <span className={styles.icon + " material-symbols-outlined"}>
            grid_view
          </span>
          <span className={styles.icon + " material-symbols-outlined"}>
            podcasts
          </span>
          <span className={styles.icon + " material-symbols-outlined"}>
            genres
          </span>
          <span className={styles.icon + " material-symbols-outlined"}>
            search
          </span>
        </div>
        <div className={styles.traslucid + ' ' + styles.traslucidLight + ' ' + styles.secondaryNav + ' ' + styles.radiusLeft}>
        <div className={styles.radiusLeftBorder + ' ' + styles.size275}></div>
          <div className={styles.titleContainer}>
            <div className={styles.headerContainer}>
              <h2>Library</h2>
              <span className={styles.icon + ' ' + styles.iconActive  + " material-symbols-outlined"}>
                more_horiz
              </span>
            </div>
            <h4>All music</h4>
          </div>
          <Sidebar />
        </div>
        <div className={styles.traslucid + ' ' + styles.traslucidStrong + ' ' +styles.content + ' ' +  styles.radiusRight}>
          <PreviewComponent />
        </div>
      </div>
    </div>
  );
}

export default Editor;
