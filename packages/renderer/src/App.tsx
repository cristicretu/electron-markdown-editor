import React, { useCallback, useState } from 'react'
import Editor from './Editor'
import './app.css'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <Editor initialDoc={doc} onChange={handleDocChange} />
      </header>
    </div>
  )
}

export default App
