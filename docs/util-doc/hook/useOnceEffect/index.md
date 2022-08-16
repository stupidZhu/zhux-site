---
title: useOnceEffect
---

# useOnceEffect

<code src="./demos/base.tsx"></code>

## props

| 参数      | 说明                          | 类型             | 默认值 |
| :-------- | :---------------------------- | :--------------- | :----- |
| cb        | 和 useEffect 的第一个参数一致 | `EffectCallback` | 必填   |
| dep       | 和 useEffect 的第二个参数一致 | `DependencyList` | /      |
| condition | effect 触发的条件             | `() => boolean`  | /      |
