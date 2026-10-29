"use client";
import { useState } from "react";
import { videoSources } from "../_lib/planning";
export default function RothVideo() {
  const [loaded, setLoaded] = useState(false);
  const video = videoSources.roth;
  return <div className="planning-video-block">
    <div className="planning-video-frame">{loaded ? (
      <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=0&rel=0`} title={`${video.title} — ${video.author}`} allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" ref={(element) => element?.focus()} />
    ) : (
      <button type="button" className="planning-video-load" onClick={() => setLoaded(true)} aria-label={`Load video: ${video.title}`}><span className="planning-play" aria-hidden="true">▶</span><span className="planning-video-title">{video.title}</span><span>Glenn Eckstut · 11 min 36 sec</span><span className="planning-video-privacy">Load the YouTube player. Playback starts when you press play.</span></button>
    )}</div>
    <p className="planning-video-fallback"><a href={video.url} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a> · Opens in a new tab. Use this link if the player is unavailable.</p>
    <p className="planning-video-note">Video by Glenn Eckstut. His original video, description, and disclosures remain available on YouTube. Any offers or scheduling links in the video refer to his separate practice.</p>
    <details className="planning-video-disclosures"><summary>About the video’s disclosures</summary><p>The video is educational, does not provide financial advice, and notes that individual results vary. Its securities and investment-advisory firm disclosures appear below. Its description also explains that registered index-linked annuities are insurance contracts with investment risk, carry no FDIC insurance, and depend on the insurer’s ability to meet its obligations for any guarantees. View the original description for the complete wording.</p></details>
  </div>;
}
