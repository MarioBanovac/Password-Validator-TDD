
<p align="center">
    <h1 align="center">Password-Validator-TDD</h1>
</p>

##  Quick Links

> - [ Overview](#-overview)
> - [ Business Requirements](#-business-requirements)

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

