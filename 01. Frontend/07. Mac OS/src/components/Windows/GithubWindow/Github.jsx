import React from 'react'
import MacWindow from "../MacWindow/MacWindow"
import "./Github.scss"
import ProjectData from "../../../assets/github.json"

const MakeCards = ({id, image, title, description, tags, repoLink, demoLink})=> {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="tags">
                {tags.map(tag => <p className="tag">{tag}</p>)}
            </div>
            <div className="projectLinks">
                <a href={repoLink}><i class="ri-github-fill"></i> Repository</a>
                {demoLink && <a href={demoLink}><i class="ri-link-m"></i> DemoLink</a>}
            </div>
        </div>
    )
}

const Github = ({windowName, setWindowState, activeWindow, setActiveWindow}) => {
  return (
    <div>
        <MacWindow windowName={windowName} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} x={30} y={30}>
            <div className="cards">
                {ProjectData.map((oneCardData)=> {
                    return <MakeCards {...oneCardData} />
                })}
            </div>
        </MacWindow>
    </div>
  )
}

export default Github