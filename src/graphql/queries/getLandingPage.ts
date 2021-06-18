const GET_LANDING_PAGE = /* GraphQL */ `
  # Write your query or mutation here
  # Write your query or mutation here
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment aboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment tech on LandingPage {
    sectionTech {
      title
      techIcons {
        icon {
          url
          alternativeText
          name
        }
        title
      }
    }
  }

  fragment concepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment modules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment agenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment priceBox on LandingPage {
    priceBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        id
        name
        role
        photo {
          url
          alternativeText
        }
        socialLinks {
          id
          title
          url
        }
        description
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        id
        name
        text
        photo {
          url
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutProject
      ...tech
      ...concepts
      ...modules
      ...agenda
      ...priceBox
      ...sectionAboutUs
      ...sectionReviews
    }
  }
`
export default GET_LANDING_PAGE
