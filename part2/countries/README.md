# Part 2 - Exercise Countries

- [Exercise 2.18: Countries, step 1](#step-1)

## <a id="step-1"></a> Exercise 2.18: Countries, step 1

At `https://studies.cs.helsinki.fi/restcountries/` you can find a service that offers a lot of information related to different countries in a so-called machine-readable format via the REST API. Make an application that allows you to view information from different countries.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

![Too many countries](./docs/countries-too-many.png)

If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

![Display countries](./docs/countries-display.png)

When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken are shown:

![Country details](./docs/countries-details.png)

**NB:** It is enough that your application works for most countries. Some countries, like _Sudan_, can be hard to support since the name of the country is part of the name of another country, _South Sudan_. You don't need to worry about these edge cases.

---

[🏠 Summary](../../README.md)
