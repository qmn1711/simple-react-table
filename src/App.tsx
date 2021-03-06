import Candidates from './pages/Candidates'

import './App.scss'

const CANDIDATES_ENDPOINT = 'https://personio-fe-test.herokuapp.com/api/v1/candidates'

const CANDIDATE_IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAByElEQVRIieXWPWsVQRTG8d8VBZVYeMFIVCwkmE7EIqSRRBARO/0EIiksBEE/gC9VrC0sLAIRLCRIrKyEFMHK11JQIRgFCwVRgwajFjsrk+vN7M5eg0UeOOzsOWfOf3ZndnZYb2pVxAdxAltq1FrCDXzrdVDDWMSvDLuPzb2Cb2cAn2I5B74hERvIGOQ9jOMnjof75PSkwLmajODHMJOCb6wotogHeKEY5CCOYmsC3sLNAL+LkzIX3Gm0u/jbuG7lHF/uyDkjc85zdC4B7hnej1v4FGwKO6L4nQS4Ez4WB1IbSB+eY1+H/xUO4gsOhJzXwbrpkGJ6jmA2wfujK1b/bi9FeQuJvNhWPHHqcxpOxEai9psaD/GXUuCPidiHqN3XBJzSmGIz6HxlyxgNOdvwvUtO5auu0kXFX6fsvIQLUfxsTWg2GIZwPtj+yL8b79cSvJp2KlZ3o1X9L7QJV3VfD1ngFg5jAg8xj6/B5oNvIuTEG9B4L+AhPK4oENuj0KfUdBNwG+8yoKW9xfZQY7QuON5ATsk7dZTapfjnwpO6nWLwngbQUnvD9XMT8Fpr4X+Ap/EydsRnrjlca1h4LmrHNX7gmeLstc71G7y927H4GBPFAAAAAElFTkSuQmCC'

function App() {
  return (
    <div className="app">
      <div className="candidates">
        <div className="title">
          <div>
            <img src={CANDIDATE_IMAGE} alt="Applications" />
          </div>
          <h3>Applications</h3>
        </div>

        <Candidates endpoint={CANDIDATES_ENDPOINT} />
      </div>
    </div>
  )
}

export default App
