---
title: useStorageState
---

# useStorageState

<code src="./demos/base.tsx"></code>

## props

| 参数         | 说明                     | 类型                                    | 默认值      |
| :----------- | :----------------------- | :-------------------------------------- | :---------- |
| key          | 存入 localStorage 的 key | `React.Key`                             | 必填        |
| defaultValue | 初始值                   | `T`                                     | 必填        |
| storageUtil  | 可以用来自定义前缀       | [`StorageUtil`](../widget/storage-util) | 前缀为 `ZU` |

## result

| 数据/方法  | 说明              | 类型                                                                      |
| :--------- | :---------------- | :------------------------------------------------------------------------ |
| storage    | 存入 storage 的值 | `T`                                                                       |
| setStorage | 修改 storage 的值 | `(fieldKey: keyof T \| Partial<T> \| ((v: T) => T), value?: any) => void` |
