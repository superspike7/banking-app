import React from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 70%;
  flex: 1;
  padding: 2rem;

  .box {
    background-color: #fff;
    border-radius: 15px;
    padding: 2rem;
    width: 80%;
    margin: 0 auto 1rem;
    box-shadow: 0px 0px 5px 3px rgba(240, 240, 240, 1);

    h1 {
      color: #596dc4;
    }

    span {
      font-size: 2rem;
      color: #596dc4;
    }
  }

  .transactions {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    margin: auto;
    gap: 10px;
    > div {
      flex: 1;
      color: #596dc4;
    }
    .box {
      box-sizing: border-box;
      width: 100%;
      margin: 0 0 10px;
      text-align: center;
    }
  }

  form {
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }

  input {
    border: none;
    border-bottom: 2px solid rgb(236, 236, 236);
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
  button {
    display: block;
    margin-top: 1rem;
    margin-left: auto;
    border: none;
    padding: 0.8rem 1.8rem;
    background-color: #596dc4;
    color: white;
    border-radius: 5px;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 2px solid rgb(236, 236, 236);
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    height: 10vh;
    border: 2px solid rgb(236, 236, 236);
  }
`;

export default function NewUser() {
  return (
    <Content>
      <div className="box">
        <h1>John Doe</h1>
        <p>
          Current Balance: <span>1000</span>
        </p>
      </div>
      <div className="transactions">
        <div>
          <div className="box">
            <p>Withdraw</p>
            <form>
              <input type="number" />
              <button>Withdraw</button>
            </form>
          </div>
          <div className="box">
            <p>Deposits</p>
            <form>
              <input type="number" />
              <button>Withdraw</button>
            </form>
          </div>
        </div>
        <div className="box">
          <p>Transfer</p>
          <form>
            <label for="user">Account Name:</label>
            <select name="user">
              <option>Jose Rizal</option>
            </select>
            <label for="transfer">Amount:</label>
            <input type="number" name="transfer" />
            <label for="remarks">Remarks:</label>
            <textarea></textarea>
            <button>Transfer</button>
          </form>
        </div>
      </div>
    </Content>
  );
}
