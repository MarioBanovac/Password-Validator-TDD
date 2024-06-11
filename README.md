<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">README-AI-STREAMLIT</h1>
</p>
<p align="center">
    <em>HTTP error 401 for prompt `slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/eli64s/readme-ai-streamlit?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/eli64s/readme-ai-streamlit?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/eli64s/readme-ai-streamlit?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/eli64s/readme-ai-streamlit?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=flat&logo=GNU-Bash&logoColor=white" alt="GNU%20Bash">
	<img src="https://img.shields.io/badge/Streamlit-FF4B4B.svg?style=flat&logo=Streamlit&logoColor=white" alt="Streamlit">
	<img src="https://img.shields.io/badge/Poetry-60A5FA.svg?style=flat&logo=Poetry&logoColor=white" alt="Poetry">
	<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="Python">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)

---

##  Overview

Password validator implemented using TDD and customer-centric approach by shifting the focus from implementation details to business domain requirements

---
***Business Requirements***

1. The password must be at least 8 characters long. If it is not met, then the following error message should be returned: “Password must be at least 8 characters”

2. The password must contain at least 2 numbers. If it is not met, then the following error message should be returned: “The password must contain at least 2 numbers”

3. The validation function should handle multiple validation errors.

For example, “somepassword” should an error message: “Password must be at least 8 characters\nThe password must contain at least 2 numbers”
4. The password must contain at least one capital letter. If it is not met, then the following error message should be returned: “password must contain at least one capital letter”

5. The password must contain at least one special character. If it is not met, then the following error message should be returned: “password must contain at least one special character”

###  Installation

1. Clone the repository:

```sh
git clone https://github.com/MarioBanovac/Password-Validator-TDD.git
```

2. Change to the project directory:

```sh
cd Password-Validator-TDD
```

3. Install the dependencies:

```sh
yarn install
```

###  Running tests

Use the following command to run tests in watch mode:

```sh
yarn test
```

