import "./css/dev.scss";
import "bootstrap/js/dist/collapse";
import logo from "./img/logo.svg";
import { BannerModule } from "./Components/BannerModule/BannerModule.stories";

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 header__wrapper">
                <a
                  href="http://www.itryggehender24-7.no/"
                  className="header__logo"
                >
                  <img src={logo} alt="Logo" />
                </a>
                <div className="search-input">
                  <input
                    type="text"
                    placeholder="Hva leter du etter?"
                    id="SiteSearchInput"
                    data-sok="http://www.itryggehender24-7.no/sok"
                  />
                  <button id="searchButton" className="btn">
                    Søk
                  </button>
                </div>
                <button className="btn header__menu header__menu-btn">
                  <span>Meny</span>
                </button>
              </div>
              <div className="col-12">
                <nav className="header__nav">
                  <button className="btn btn-icon header__nav__close header__menu-btn">
                    <img
                      src="/_/asset/no.pasientsikkerhet:0000017dc48f9d30/img/icons/close-w.svg"
                      alt="Close menu"
                    />
                  </button>
                  <div className="search-input">
                    <input type="text" id="SiteSearchInputMobile" />
                    <button id="searchButtonMobile" className="btn">
                      Søk
                    </button>
                  </div>
                  <ul className="nav__items">
                    <li className="nav__item">
                      <a
                        className="item-link"
                        href="http://www.itryggehender24-7.no/reduser-pasientskader"
                      >
                        Reduser pasientskader
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        className="item-link"
                        href="http://www.itryggehender24-7.no/kvalitetsforbedring"
                      >
                        Kvalitetsforbedring
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        className="item-link"
                        href="http://www.itryggehender24-7.no/om-pasientsikkerhet"
                      >
                        Om pasientsikkerhet
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        className="item-link"
                        href="http://www.itryggehender24-7.no/om-i-trygge-hender-24-7"
                      >
                        Om I trygge hender 24/7
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        className="item-link"
                        href="http://www.itryggehender24-7.no/malinger"
                      >
                        Måle og følge med
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        className="item-link"
                        href="http://www.itryggehender24-7.no/ledelse-og-kultur"
                      >
                        Ledelse og kultur
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        className="item-link"
                        href="http://www.itryggehender24-7.no/aktuelt/nyheter"
                      >
                        Nyheter
                      </a>
                    </li>
                    <li className="nav__item">
                      <a
                        className="item-link"
                        href="http://www.itryggehender24-7.no/aktuelt/kurs-og-arrangementer"
                      >
                        Kurs og arrangementer
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div className="page__content">
          <div data-portal-component-type="region" data-portal-region="main">
            <div
              data-portal-component-type="part"
              className="page-top bg-white"
            >
              {/* .bg-white, .bg-blue, .bg-gray , .bg-orange, .bg-green */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="page-top__text">
                      <p>
                        Hver pasientskade er én for mye. Målet er en trygg og
                        sikker helse- og omsorgstjeneste -&nbsp;uten skade, for
                        hver pasient og bruker, alltid og overalt.&nbsp;
                      </p>
                      <button className="btn btn-outline-primary">
                        Mer om arbeidet
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="page-top__img">
                      <img
                        src="/_/image/63314d5f-063a-4194-b8a0-0e7a0b2a5ceb:54ffb7a8b3e350a05a95c53b76fe110df91bdb36/block-1434-1074/ITH247_ny-hoved.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BannerModule />

            <div data-portal-component-type="part" className="container">
              <div className="row mb-96 mt-96">
                <div className="col-lg-7 box-home__wrap">
                  <div className="box-home">
                    <h3>Forebygge pasientskader</h3>
                    <p className="intro">
                      Her finner du verktøy for å forhindre ulike typer
                      pasientskader.
                    </p>
                    <div className="icon-group__wrap">
                      <div className="icon-group">
                        <a href="/reduser-pasientskader/tidlig-oppdagelse-av-forverret-tilstand">
                          <div className="icon-group__img">
                            <img
                              src="/_/image/0b683976-458e-4529-86b7-d7e41a1223c5:553fac01329682ed83724b8c37fc953eba6e7df1/block-115-172/Forverret%20somatisk%20tilstand-oransj.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon-group__text">
                            <h4>Tidlig oppdagelse</h4>
                          </div>
                        </a>
                      </div>
                      <div className="icon-group">
                        <a href="/reduser-pasientskader/god-utskrivningsprosess">
                          <div className="icon-group__img">
                            <img
                              src="/_/image/816fe6cd-2fb0-4535-ad40-8a75933cbb73:8ad411a66926da2acdf39b98cdae32cb56a897af/block-115-172/Da%E2%95%A0e%CC%80rlig%20kommunikasjon%20ved%20utskriving-oransj.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon-group__text">
                            <h4>God utskrivningsprosess</h4>
                          </div>
                        </a>
                      </div>
                      <div className="icon-group">
                        <a href="/reduser-pasientskader/legemiddelrelaterte-skader">
                          <div className="icon-group__img">
                            <img
                              src="/_/image/cf6585ef-1624-443b-bd00-ea1dd397e92a:b5225267466a0107c8f244132c769f9280976a3d/block-115-172/Riktig%20legemiddelbruk-i%20sykehjem-oransj.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon-group__text">
                            <h4>Legemidler</h4>
                          </div>
                        </a>
                      </div>
                      <div className="icon-group">
                        <a href="/reduser-pasientskader/urinveisinfeksjoner">
                          <div className="icon-group__img">
                            <img
                              src="/_/image/9dd7c6c0-5ca3-4529-b0a3-4a190fa12305:7611c2ffcee21eb2b4fe4cf32499052098a271c8/block-115-172/Urinveisinfeksjon-oransj.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon-group__text">
                            <h4>Urinveisinfeksjoner</h4>
                          </div>
                        </a>
                      </div>
                      <div className="icon-group">
                        <a href="/reduser-pasientskader/kateterassosierte-infeksjoner">
                          <div className="icon-group__img">
                            <img
                              src="/_/image/b8703a55-2883-4482-ac04-5ddbd9dedfcc:e8f5fa17009d60baf8da4e541acff6a15b1de424/block-115-172/Infeksjon%20ved%20SVK-oransj.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon-group__text">
                            <h4>Kateterassosierte infeksjoner</h4>
                          </div>
                        </a>
                      </div>
                      <div className="icon-group">
                        <a href="/reduser-pasientskader/kirurgiske-komplikasjoner">
                          <div className="icon-group__img">
                            <img
                              src="/_/image/1fbdbe1c-0aa5-49c2-992c-a61634af2268:c2b788e80aad338db24dee714d34518a04e8f39f/block-115-172/kirurgiske%20skader.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon-group__text">
                            <h4>Kirurgiske komplikasjoner</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <button className="btn btn-link btn-link--block btn-link--arrow">
                      <span>Se alle områdene</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-5 box-home__wrap">
                  <div className="box-home right-box">
                    <a href="http://www.itryggehender24-7.no/kvalitetsforbedring">
                      <h3>
                        <button className="btn title-link btn-link--arrow">
                          Kvalitetsforbedring
                        </button>
                      </h3>
                      {/* works with button and a */}
                    </a>
                  </div>
                  <div className="box-home right-box">
                    <a href="http://www.itryggehender24-7.no/om-pasientsikkerhet">
                      <h3>
                        <button className="btn title-link btn-link--arrow">
                          Om pasientsikkerhet
                        </button>
                      </h3>
                      {/* works with button and a */}
                      <p>
                        Hver pasientskade er én for mye. Målet er en trygg og
                        sikker helse- og omsorgstjeneste - uten skade, for hver
                        pasient og bruker, alltid og overalt.
                      </p>
                    </a>
                  </div>
                  <div className="box-home right-box">
                    <a href="http://www.itryggehender24-7.no/ledelse-og-kultur">
                      <h3>
                        <button className="btn title-link btn-link--arrow">
                          Ledelse og kultur
                        </button>
                      </h3>
                      {/* works with button and a */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-portal-component-type="part"
              className="page-top bg-white"
            >
              {/* .bg-white, .bg-blue, .bg-gray , .bg-orange, .bg-green */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="page-top__text">
                      <h1>
                        Pasientsikkerhetskonferansen 2022 blir 24. og 25.
                        november
                      </h1>
                      <p>
                        Pasientsikkerhetskonferansen er Norges største og
                        viktigste møteplass for alle som er opptatt av
                        pasientsikkerhet og kvalitetsforbedring.&nbsp;
                      </p>
                      <button className="btn btn-outline-primary">
                        Mer informasjon og opptak av fjorårets konferanse
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="page-top__img">
                      <img
                        src="/_/image/a1e4eb72-908a-406b-abdb-e13590537bf0:5e5c847ea329c8967658f4a3b63abfb8cd7cb7c6/block-720-500/portretter%20i%20trygge%20hender%201.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-portal-component-type="part"
              className="container health-services"
            >
              <div className="row">
                <div className="col-12">
                  <div className="health-services__box">
                    <h2>Sammen skaper vi tryggere helsetjenester</h2>
                    <p className="ingress">Aktører, roller og ansvar</p>
                    <div className="health-services__box__row">
                      <div className="health-services__box__item">
                        <div className="health-services__box__item__img health-services__box__item__img--v">
                          <div className="img aspectRatio--2x3">
                            <img
                              src="/_/image/b78e0b3a-f61b-4956-b9fb-81274e475ff0:2601c2efd2247a0af60f69bfad6d0bef506037bd/block-140-177/1.1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p>Helsepersonell</p>
                      </div>
                      <div className="health-services__box__item">
                        <div className="health-services__box__item__img health-services__box__item__img--h">
                          <div className="img aspectRatio--3x2">
                            <img
                              src="/_/image/166a5e70-e227-43f0-9c48-96442c596d56:4d57b8fcd9051ed607a34828512d61d0a5e410aa/block-185-182/2.1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p>Pasienter og pårørende</p>
                      </div>
                      <div className="health-services__box__item">
                        <div className="health-services__box__item__img health-services__box__item__img--v">
                          <div className="img aspectRatio--2x3">
                            <img
                              src="/_/image/f39d2cb7-3bc4-4f2b-85a0-d71fcf5729dc:bd021ac933f1a953ffa30892f36446189693e5c4/block-139-178/3.1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p>Ledelse og styre</p>
                      </div>
                      <div className="health-services__box__item">
                        <div className="health-services__box__item__img health-services__box__item__img--h">
                          <div className="img aspectRatio--3x2">
                            <img
                              src="/_/image/8844bf7b-b71a-44ba-89ec-2dcd82712e0a:1de43ea0cdbbd3e0e91b270769d6ff2c1fec4fe2/block-228-182/4.1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p>Organisasjoner</p>
                      </div>
                      <div className="health-services__box__item">
                        <div className="health-services__box__item__img health-services__box__item__img--v">
                          <div className="img aspectRatio--2x3">
                            <img
                              src="/_/image/97ea0e64-21c5-4ea1-ac7c-d65ede30f603:7434ceccf53533af12a3a6e79b2cf705fe1e8ef8/block-138-178/5.1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p>Myndigheter</p>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary">
                      Mer om roller og ansvar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-portal-component-type="part"
              className="bg-blue statistics mt-96"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="statistics__box">
                      <div className="statistics__box--value text-xl">
                        12,4%
                      </div>
                      <p className="ingress">
                        av somatiske sykehusopphold oppstod det en pasientskade
                        i 2019
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="statistics__box">
                      <div className="statistics__box--value text-xl">2,1%</div>
                      <p className="ingress">
                        av alle innleggelser oppsto det skader relatert til
                        legemidler
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="statistics__box">
                      <button
                        className="btn statistics__box__arrow"
                        url="/malinger/folge-med-pa-pasientsikkerhet"
                      >
                        Se flere tall
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-portal-component-type="part"
              className="related-news bg-white"
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2>Aktuelt</h2>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <a href="/aktuelt/nyheter/nok-og-riktig-mat-i-sykehjem">
                        <div className="img aspectRatio--3x2">
                          <img
                            src="/_/image/8345b9fb-9344-4f17-a7c4-d47d67b844b7:49dbb796bde999d59585488c6aa4e737edaf9c0d/block-454-302/Kristin%20Skalleberg.jpg"
                            alt=""
                          />
                        </div>
                        <div className="card__content">
                          <div className="card__title">
                            <h4>Nok og riktig mat i sykehjem</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <a href="/aktuelt/nyheter/rabra">
                        <div className="img aspectRatio--3x2">
                          <img
                            src="/_/image/f08ea4fa-c67a-4842-b2cb-adaadcbbe30b:2567016da0688b3a96cce07609aa3deb44c42784/block-454-302/IMG_6729_LARGE.jpg"
                            alt=""
                          />
                        </div>
                        <div className="card__content">
                          <div className="card__title">
                            <h4>
                              Har kollegaen din gjort noe #Råbra i det siste?
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <a href="/aktuelt/nyheter/nytt-verktoy-og-retningslinje-for-a-forebygge-underernaering">
                        <div className="img aspectRatio--3x2">
                          <img
                            src="/_/image/4f67eed2-651d-4526-8c93-db0dc66a95e3:80e5e31aca8ad14cd66f316a749d5d4b2acdf23c/block-454-302/Helsepersonell%20og%20pasient.%20Foto%20Mostphoto.jpg"
                            alt=""
                          />
                        </div>
                        <div className="card__content">
                          <div className="card__title">
                            <h4>
                              Nytt verktøy og retningslinje for å forebygge
                              underernæring
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="btn-box">
                      <a
                        href="/aktuelt/nyheter"
                        className="btn btn-link btn-link--arrow"
                      >
                        Se flere nyheter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <h4>Få siste nytt fra oss i innboksen</h4>
                <form
                  action="https://pub.dialogapi.no/s/72d98a2c-73ab-4006-96f9-bdc121cb7016"
                  id="mc_embed_signup"
                  target="_blank"
                >
                  <input
                    type="hidden"
                    className="form-control"
                    name="u"
                    defaultValue="70928d313208edc08cce0794b"
                  />
                  <input
                    type="hidden"
                    className="form-control"
                    name="id"
                    defaultValue="4a340e04b6"
                  />
                  <div className="form-group">
                    <label htmlFor="emailNews">
                      Meld deg på vårt nyhetsbrev
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="emailNews"
                      name="email"
                      placeholder="E-postadresse"
                    />
                  </div>
                </form>
                <button
                  className="btn btn-primary"
                  type="submit"
                  form="mc_embed_signup"
                >
                  Meld deg på
                </button>
              </div>
              <div className="offset-lg-1 col-lg-4 col-sm-12">
                <h4>Kontakt oss</h4>
                <dl>
                  {" "}
                  <dt>E-post:</dt>{" "}
                  <dd>
                    <a href="mailto:Itryggehender@helsedir.no">
                      Itryggehender@helsedir.no
                    </a>
                  </dd>{" "}
                  <dd>Telefon: (+47) 47 47 20 20 (sentralbord)</dd>{" "}
                  <dd>&nbsp;</dd> <dt>Besøksadresse:</dt>{" "}
                  <dd>Helsedirektoratet, Vitaminveien 4</dd>{" "}
                  <dd>
                    <a
                      href="/om-i-trygge-hender-24-7/personvern"
                      title="Personvern"
                    >
                      Personvern
                    </a>
                  </dd>{" "}
                  <dd>&nbsp;</dd>{" "}
                  <dt>
                    I trygge hender 24-7 driftes av Helsedirektoratet i
                    samarbeid med{" "}
                    <a href="/om-i-trygge-hender-24-7/aktorer-roller-og-ansvar">
                      aktørene
                    </a>
                    .
                  </dt>
                </dl>
              </div>
              <div className=" col-lg-3 col-sm-12">
                <h4>Følg oss på</h4>
                <a
                  href="https://www.facebook.com/itryggehender/"
                  className="footer__social footer__social--facebook"
                >
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/channel/UCVcA6kUoJvAu2VYRa7Lf2bg"
                  className="footer__social footer__social--youtube"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
