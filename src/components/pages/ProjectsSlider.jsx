import styles from "../styles/ProjectsSlider.module.css";
import texttoimageaiwebp from "../assets/webp/texttoimageai.webp";
import texttoimageaiavif from "../assets/avif/texttoimageai.avif";
import weatherwebp from "../assets/webp/weather.webp";
import weatheravif from "../assets/avif/weather.avif";
import memewebp from "../assets/webp/meme.webp";
import memeavif from "../assets/avif/meme.avif";
import greenpartywebp from "../assets/webp/greenparty.webp";
import greenpartyavif from "../assets/avif/greenparty.avif";
import gittwowebp from "../assets/webp/gittwo.webp";
import githubtwoavif from "../assets/avif/githubtwo.avif";
import amazingwebp from "../assets/webp/amazingspace.webp";
import amazingavif from "../assets/avif/amazingspace.avif";
import inquizablewebp from "../assets/webp/inquizable.webp";
import inquizableavif from "../assets/avif/inquizable.avif";
import ImageFallback from "../../data/ImageFallback";

function ProjectsSlider() {
	return (
		<div className={styles.main}>
			<h2 className={styles.header}>PROJECTS</h2>

			<div className={styles.row}>
				<div className={`${styles.column} ${styles.texttoimage}`}>
					<div className={styles.content}>
						<a href="https://openai-text-to-image-reactv2.vercel.app">
							<ImageFallback
								className={styles.image}
								src={texttoimageaiavif}
								fallbackSrc={texttoimageaiwebp}
								alt="text to img generator"
								style={{ width: "100%" }}
								loading="lazy"
							/>
						</a>
						<a href="https://openai-text-to-image-reactv2.vercel.app">
							<h3 className={styles.project_name}>
								Ai Text to Image Generator
							</h3>
						</a>
						<p className={styles.para}>
							Users can input a text description into the
							application, and the DALL-E API will generate an
							image that corresponds to the description. The
							generated image is then displayed in the web
							application for the user to view and download.
						</p>
					</div>
				</div>
				<div className={`${styles.column} ${styles.weather}`}>
					<div className={styles.content}>
						<a href="https://weathertest-app.vercel.app">
							<ImageFallback
								className={styles.image}
								src={weatheravif}
								fallbackSrc={weatherwebp}
								alt="global and local weather"
								style={{ width: "100%" }}
								loading="lazy"
							/>
						</a>
						<a href="https://weathertest-app.vercel.app">
							<h3 className={styles.project_name}>
								Global & Local Weather App
							</h3>
						</a>
						<p className={styles.para}>
							Duel Weather App that displays local weather and the
							ability to find weather conditions anywhere on
							earth. Created in React.
						</p>
					</div>
				</div>
				<div className={`${styles.column} ${styles.greenparty}`}>
					<div className={styles.content}>
						<a href="https://gulsah-bayar.vercel.app">
							<ImageFallback
								className={styles.image}
								src={greenpartyavif}
								fallbackSrc={greenpartywebp}
								alt="Gülsah Green Party Member"
								style={{ width: "100%" }}
								loading="lazy"
							/>
						</a>
						<a href="https://gulsah-bayar.vercel.app">
							<h3 className={styles.project_name}>
								Gülşah Bayar
							</h3>
						</a>
						<p className={styles.para}>
							Lorem ipsum dolor sit amet, tempor prodesset eos no.
							Temporibus necessitatibus sea ei, at tantas oporteat
							nam. Lorem ipsum dolor sit amet, tempor prodesset
							eos no.
						</p>
					</div>
				</div>
				<div className={`${styles.column} ${styles.meme}`}>
					<div className={styles.content}>
						<a href="https://memefunv2.netlify.app">
							<ImageFallback
								className={styles.image}
								src={memeavif}
								fallbackSrc={memewebp}
								alt="meme generator"
								style={{ width: "100%" }}
								loading="lazy"
							/>
						</a>
						<a href="https://memefunv2.netlify.app">
							<h3 className={styles.project_name}>
								Meme Generator
							</h3>
						</a>
						<p className={styles.para}>
							A little web app where you can make and save custom
							memes. Just enter text in the 3 inputs and save it
							to desktop, mobile, or tablet. Created in React.
						</p>
					</div>
				</div>
				<div className={`${styles.column} ${styles.github}`}>
					<div className={styles.content}>
						<a href="https://git-hub-finder-vite.vercel.app/">
							<ImageFallback
								className={styles.image}
								src={githubtwoavif}
								fallbackSrc={gittwowebp}
								alt="GitHub Finder"
								style={{ width: "100%" }}
								loading="lazy"
							/>
						</a>
						<a href="https://git-hub-finder-vite.vercel.app/">
							<h3 className={styles.project_name}>
								GitHub Finder
							</h3>
						</a>
						<p className={styles.para}>
							This website allows you to search for GitHub users
							by entering their username into a search bar. Upon
							submitting the username, the website displays the
							user's profile picture, bio, location, and number of
							followers and following. <br />
							<br />
							Additionally, the website displays a list of the
							user's public repositories with details like the
							repository name, description, and the number of
							stars and forks.
						</p>
					</div>
				</div>
				<div className={`${styles.column} ${styles.amazingspace}`}>
					<div className={styles.content}>
						<a href="https://amazing-spacetime.netlify.app">
							<ImageFallback
								className={styles.image}
								src={amazingavif}
								fallbackSrc={amazingwebp}
								alt="amazing space travel"
								style={{ width: "100%" }}
								loading="lazy"
							/>
						</a>
						<a href="https://amazing-spacetime.netlify.app">
							<h3 className={styles.project_name}>
								Amazing Space
							</h3>
						</a>
						<p className={styles.para}>
							A little web app where you can make and save custom
							memes. Just enter text in the 3 inputs and save it
							to desktop, mobile, or tablet. Created in React.
						</p>
					</div>
				</div>
			</div>
			<div className={`${styles.content} ${styles.inquilabe}`}>
				<a href="https://www.inquizable.com/">
					<ImageFallback
						className={styles.image}
						src={inquizableavif}
						fallbackSrc={inquizablewebp}
						alt="inquizable.com"
						style={{ width: "100%" }}
						loading="lazy"
					/>
				</a>
				<a href="https://www.inquizable.com/">
					<h3 className={styles.project_name}>Inquizable</h3>
				</a>
				<p className={styles.para}>
					Inquizable is a website that offers a variety of trivia and
					quiz games for users to play and compete with others from
					around the world. The site covers a broad range of topics,
					including sports, science, history, geography, pop culture,
					and more. <br />
					<br />
					The site's interface is clean and user-friendly, and the
					quizzes are engaging and challenging. Users can play on any
					device, including desktop, tablet, and mobile devices.
				</p>
			</div>
		</div>
	);
}

export default ProjectsSlider;
