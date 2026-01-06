import UseWindowResize from "./hooks/use-window-resize.jsx"

export default function UseWindowResizeTest(){
    const windowSize = UseWindowResize()
    const {width, height} = windowSize

    return<>
        <div className="window main-box">
            <h1>Use Window Resize Hook</h1>

            <p className="window-text">
                Width is {width}

            </p>

            <p className="window-text">
                Height is {height}
            </p>
        </div>
    </>
}