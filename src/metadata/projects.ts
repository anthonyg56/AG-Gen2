import { ProjectsMetadata as ProjectsMetadataT } from '../custom-types/projects'

export const PaceMedia: ProjectsMetadataT = {
  title: "Pace Media",
  banner: "https://images.ctfassets.net/njugwttfbc40/W7zAx9EoCTyP99xjrwZQF/cbb7db842e51898779d96887829581c9/Screen_Shot_2020-02-02_at_2.13.31_AM.png",
  slug: "pace-media",
  url: "http://paceweitkamp.com",
  github: "https://github.com/anthonyg56/Pac-Media",
  techStack: [
    'React',
    'Contentful'
  ],
  CSSProperties: {
    primaryColor: '#000000',
    secondaryColor: '#000000',
    primarySVGFilter: 'invert(100%) sepia(0%) saturate(7498%) hue-rotate(322deg) brightness(100%) contrast(102%)',
    secondarySVGFilter: 'invert(0%) sepia(0%) saturate(7500%) hue-rotate(282deg) brightness(94%) contrast(107%)',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
  }
}

const ProjectsMetadata  = [
  PaceMedia
]

export default ProjectsMetadata