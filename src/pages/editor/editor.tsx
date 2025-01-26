import EditionComponent from '@components/EditionComponent/layout';

import styles from './index.module.css';

function Editor() {
  return (
    <div className={styles.container}>
      <div className={`${styles.editorSection} ${styles.editorHeader}`}>
        Header Component
      </div>
      <div className={`${styles.editorSection} ${styles.editorMain}`}>
        <EditionComponent />
      </div>
      <div className={`${styles.editorSection} ${styles.editorFooter}`}>
        FooterComponent
      </div>
    </div>
  );
}

export default Editor;
