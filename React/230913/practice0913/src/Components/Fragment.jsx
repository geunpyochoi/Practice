import React from 'react'

export default function Fragment() {
  const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];
  function ShowItems(){
    const itemsList = items.map(({ id, name, desc }) => {
        return (
            <React.Fragment key={id}>
                <dt>{name}</dt>
                <dd>{desc}</dd>
            </React.Fragment>
        )
    });
    return (
        <dl>
            {itemsList}
        </dl>
    )
  }
  return (
    <>
      <ShowItems />
    </>
  )
}
