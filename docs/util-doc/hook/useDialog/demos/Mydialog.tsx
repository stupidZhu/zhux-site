import React, { useRef } from "react"
import { useDialog } from "zhux-utils-react"
import { DialogMoveFunc, DialogResizeFunc, IPosition } from "zhux-utils-react/es/hook/useDialog/useDialog"
import { WithChildren } from "zhux-utils-react/es/type"
import "./index.scss"

export const MyDialogA: React.FC<
  {
    close: () => void
    position?: IPosition
    onMove?: DialogMoveFunc
    onMoveStart?: DialogMoveFunc
    onMoveEnd?: DialogMoveFunc
    onResize?: DialogResizeFunc
    onResizeStart?: DialogResizeFunc
    onResizeEnd?: DialogResizeFunc
  } & WithChildren
> = ({
  close,
  position = { left: 0, top: 0 },
  onMove,
  onMoveStart,
  onMoveEnd,
  onResize,
  onResizeStart,
  onResizeEnd,
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const moveFieldRef = useRef<HTMLDivElement>(null)
  const resizeFieldRef = useRef<HTMLDivElement>(null)

  const stateObj = useDialog({
    dialogRef,
    moveFieldRef,
    resizeFieldRef,
    onMove,
    onMoveStart,
    onMoveEnd,
    onResize,
    onResizeStart,
    onResizeEnd,
  })

  return (
    <div className="use-dialog dialog-a" ref={dialogRef} style={{ ...position }}>
      <div
        className="move-field"
        ref={moveFieldRef}
        onClick={() => {
          // 注意此处用法，不应该 把isMoving解构出来（const { isMoving } = ...），因为作用域在函数定义时就已经确定了。而不是在函数调用时确定
          if (stateObj.isMoving) return
          console.log("hello")
        }}
      >
        <button
          onClick={e => {
            e.stopPropagation()
            close()
          }}
        >
          x
        </button>
      </div>
      <div className="use-dialog-content">{children}</div>
      <span className="desc">鼠标移动到此处 resize -&gt;</span>
      <div className="resize-field" ref={resizeFieldRef}></div>
    </div>
  )
}

export const MyDialogB: React.FC<{ close: () => void; position?: IPosition } & WithChildren> = ({
  close,
  position = { left: 0, top: 0 },
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const moveFieldRef = useRef<HTMLDivElement>(null)
  // const resizeFieldRef = useRef<HTMLDivElement>(null);

  useDialog({ dialogRef, moveFieldRef, confine: false })

  return (
    <div className="use-dialog dialog-b" ref={dialogRef} style={{ ...position }}>
      <div className="move-field" ref={moveFieldRef}>
        <button onClick={close}>x</button>
      </div>
      <div className="use-dialog-content">{children}</div>
      {/* <div className="resize-field" ref={resizeFieldRef}></div> */}
    </div>
  )
}
