/**
 * title: 受控组件
 * desc: 亦可作为受控组件使用。
 */
import React, { HTMLInputTypeAttribute, useState } from "react"
import { useCustomFields } from "zhux-utils-react"
import { CustomFieldItem } from "zhux-utils-react/es/hook/useCustomFields/useCustomFields"

const CtrlDemo = () => {
  const [value, onChange] = useState<CustomFieldItem[]>([{ id: "hello", label: "hello", value: "world", type: "text" }])
  const { fields, changeField, getFormatRes, checkNull } = useCustomFields({ defaultType: "number", value, onChange })

  return (
    <div className="custom-fields-demo">
      {fields.map((item, index) => {
        return (
          <div className="field-item" key={item.id}>
            <select value={item.type} onChange={e => changeField("type", index, e.target.value)}>
              <option value="text">文本</option>
              <option value="number">数值</option>
              <option value="password">密码</option>
            </select>
            <input
              type="text"
              value={item.label}
              onChange={e => changeField("label", index, e.target.value)}
              placeholder="请输入属性名"
            />
            <input
              type={item.type as HTMLInputTypeAttribute}
              value={item.value}
              onChange={e => changeField("value", index, e.target.value)}
              placeholder="请输入属性值"
            />
            <button onClick={() => changeField("del", index)}>删除</button>
          </div>
        )
      })}
      <hr />
      <button onClick={() => changeField("add")}>新增</button>
      <button onClick={() => console.log(getFormatRes())}>打印结果</button>
      <button
        onClick={() => {
          const { flag, index, propName } = checkNull()
          if (flag) alert(`第${index + 1}项${propName}为空！`)
        }}
      >
        校验field
      </button>
    </div>
  )
}

export default CtrlDemo
