/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
    BuildChildCont,
    SplitDiv,
    ChildDiv,
    NavDiv,
    TriDiv
} from '../editor/styles';

// function BuildChild(props) {
//   const { name } = props;
//   return (
//     <BuildChildCont>
//       {name === "split-div" && (
//         <>
//           <SplitDiv>{name}</SplitDiv>
//           <SplitDiv>{name}</SplitDiv>
//         </>
//       )}

//       {name === "nav" && (
//         <>
//           <NavDiv>{name}</NavDiv>
//         </>
//       )}

//       {name === "tri-div" && (
//         <>
//           <TriDiv>{name}</TriDiv>
//           <TriDiv>{name}</TriDiv>
//           <TriDiv>{name}</TriDiv>
//         </>
//       )}
//       {name === "div" && <ChildDiv>{name}</ChildDiv>}
//     </BuildChildCont>
//   );
// }

class BuildChild extends React.Component {
    render() {
        const { name } = this.props;
        return (
            <BuildChildCont>
                {name === 'split-div' && (
                    <>
                        <SplitDiv>{name}</SplitDiv>
                        <SplitDiv>{name}</SplitDiv>
                    </>
                )}

                {name === 'nav' && (
                    <>
                        <NavDiv>{name}</NavDiv>
                    </>
                )}

                {name === 'tri-div' && (
                    <>
                        <TriDiv>{name}</TriDiv>
                        <TriDiv>{name}</TriDiv>
                        <TriDiv>{name}</TriDiv>
                    </>
                )}
                {name === 'div' && <ChildDiv>{name}</ChildDiv>}
            </BuildChildCont>
        );
    }
}

export default BuildChild;
