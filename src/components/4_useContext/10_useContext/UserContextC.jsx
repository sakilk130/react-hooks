import React from 'react';
import { firstName, lastName } from '../../../App';

function UserContextC() {
  return (
    <div>
      <firstName.Consumer>
        {(first) => {
          return (
            <lastName.Consumer>
              {(last) => {
                return (
                  <h2>
                    {first} {last}
                  </h2>
                );
              }}
            </lastName.Consumer>
          );
        }}
      </firstName.Consumer>
    </div>
  );
}

export default UserContextC;
