import Image from "next/image";
import styles from './PortfolioInfo.module.scss'
import Link from "next/link";

const BackArrow = () => {
  return (
    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM30 4.5H1V3.5H30V4.5Z" fill="black" />
    </svg>
  )
};

const BackToList = () => {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="9" height="9" fill="#2A2A2A" />
      <rect y="12" width="9" height="9" fill="#2A2A2A" />
      <rect y="24" width="9" height="9" fill="#2A2A2A" />
      <rect x="12" width="9" height="9" fill="#2A2A2A" />
      <rect x="12" y="12" width="9" height="9" fill="#2A2A2A" />
      <rect x="12" y="24" width="9" height="9" fill="#2A2A2A" />
      <rect x="24" width="9" height="9" fill="#2A2A2A" />
      <rect x="24" y="12" width="9" height="9" fill="#2A2A2A" />
      <rect x="24" y="24" width="9" height="9" fill="#2A2A2A" />
    </svg>

  )
};

const NextArrow = () => {
  return (
    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.3536 4.35355C29.5488 4.15829 29.5488 3.84171 29.3536 3.64645L26.1716 0.464466C25.9763 0.269204 25.6597 0.269204 25.4645 0.464466C25.2692 0.659728 25.2692 0.976311 25.4645 1.17157L28.2929 4L25.4645 6.82843C25.2692 7.02369 25.2692 7.34027 25.4645 7.53553C25.6597 7.7308 25.9763 7.7308 26.1716 7.53553L29.3536 4.35355ZM0 4.5H29V3.5H0V4.5Z" fill="black" />
    </svg>
  )
};

const BackButton = ({ previousId, сardsQuantity }) => {
  if (previousId > 0) {
    return (
      <Link href={`http://localhost:3000/portfolio/${previousId}`}>
        <BackArrow />
        <p>Предыдуший проект</p>
      </Link>
    )
  };
  if (previousId == 0) {
    return (
      <Link href={`http://localhost:3000/portfolio/${сardsQuantity}`}>
        <BackArrow />
        <p>Предыдуший проект</p>
      </Link>
    )
  };
};

const NextButton = ({ nextId, сardsQuantity }) => {
  if (nextId < сardsQuantity) {
    return (
      <Link href={`http://localhost:3000/portfolio/${nextId}`}>
        <p>Следующий проект</p>
        <NextArrow />
      </Link>
    )
  };
  if (nextId == 0) {
    return (
      <Link href={`http://localhost:3000/portfolio/${сardsQuantity}`}>
        <p>Следующий проект</p>
        <NextArrow />
      </Link>
    )
  };
};


const PortfolioInfo = ({ post, numbers }) => {

  const сardsQuantity = numbers.meta.pagination.total;
  const itemInfo = post || {};
  const itemId = itemInfo.data.id;
  const pId = itemId - 1;
  const nId = itemId + 1;
  const itemTitle = itemInfo.data.attributes.title;
  const itemText = itemInfo.data.attributes.text;
  const itemDescriptionList = itemInfo.data.attributes.descriptionList;
  const itemTags = itemInfo.data.attributes.tags;
  const itemClient = itemInfo.data.attributes.client;
  const itemYear = itemInfo.data.attributes.year;
  const mainImage = itemInfo.data.attributes.mainImage;
  const mainImageUrl = `http://localhost:1337${mainImage.data.attributes.url}`;
  const itemDiscussList = itemInfo.data.attributes.discussList;
  const itemSolutionList = itemInfo.data.attributes.solutionList;
  const itemBlock = itemInfo.data.attributes.block;


  if (!post) {
    return <h3>Empty</h3>
  }
  return (
    <>
      <div className={`container`}>
        <div className={styles.sectionTopic}>
          <div className={`row`}>
            <div className={`col-xl-7`}>
              <div className={styles.topicImg}>
                <img src={mainImageUrl} alt={mainImage.data.attributes.alternativeText}></img>
              </div>
            </div>
            <div className={`col-xl-5`}>
              <div className={styles.topic}>
                <div className={styles.topicHeader}>
                  <h1>{itemTitle}</h1>
                  <p>{itemText}</p>
                </div>
                <div className={styles.topicDescription}>
                  <ul>
                    {itemDescriptionList && itemDescriptionList.map(({ id, descriptionList }) => (<p key={id}>- {descriptionList} </p>))}
                  </ul>
                </div>
                <div className={styles.topicInfo}>
                  <div className={styles.topicInfoClient}>
                    <p>Клиент</p><p>- {itemClient}</p>
                  </div>
                  <div className={styles.topicLine}></div>
                  <div className={styles.topicInfoYear}>
                    <p>Год</p><p>- {itemYear}</p>
                  </div>
                  <div className={styles.topicLine}></div>
                  <div className={styles.topicInfoCategory}>
                    <p>Категория</p>
                    <p>- {itemTags.data[0].attributes.value}</p> {/*Вывод толлько первого тега*/}
                    {/*itemTags.data && itemTags.data.map(({id, attributes}) => ( <p key={id}>{attributes.value} </p>)) */}{/*Вывод всех тегов, надо дописывать css*/}
                  </div>
                  <div className={styles.topicLine}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionDiscuss}>
          <div className={`row`}>
            <div className={`col-xl-5 col-lg-6`}>
              <div className={styles.discussList}>
                <h1>Обсудили и составили</h1>
                <ul>
                  {itemDiscussList && itemDiscussList.map(({ id, discussList }) => (<li key={id}>{discussList} </li>))}
                </ul>
              </div>
            </div>
            <div className={`col-xl-5 offset-xl-1 col-lg-6`}>
              <div className={styles.solution}>
                <h1>Выбраные решения</h1>
                <ul>
                  {itemSolutionList && itemSolutionList.map(({ id, solutionList }) => (<li key={id}>{solutionList} </li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {itemBlock && itemBlock.map(({ id, title, blockDescription, images }) => (

          <div className={styles.sectionMap} key={id}>
            <div className={`row`}>
              <div className={`col-xl-4`}>
                <div className={styles.mapHeader}>
                  <h1>{title}</h1>
                  <p>{blockDescription}</p>
                </div>
              </div>
              <div className={`col-xl-10 offset-xl-1`}>
                <div className={styles.mapImg}>
                  {images.data && images.data.map(({ id, attributes }) => (
                    <img key={id} src={`http://localhost:1337${attributes.url}`} alt="map"></img>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        ))
        }

        <div className={styles.endLine}></div>
        <div className={styles.preFooter}>
          <div className={styles.previousProject}>
            <BackButton previousId={pId} сardsQuantity={сardsQuantity} />
          </div>
          <div className={styles.backToListBtn}>
            <Link href="/portfolio"><BackToList /></Link>
          </div>
          <div className={styles.nextProject}>
            <NextButton nextId={nId} сardsQuantity={сardsQuantity} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioInfo;
