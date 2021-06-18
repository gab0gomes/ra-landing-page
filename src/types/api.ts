export type Image = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type TechIcons = {
  icon: {
    url: string
  }
  title: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcons[]
}

export type Concepts = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PriceBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLinks = {
  title: string
  url: string
}

export type Author = {
  name: string
  role: string
  photo: Image
  socialLinks: SocialLinks[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  id: string
  name: string
  text: string
  photo: {
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type LandigPageProps = {
  logo: Image
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  priceBox: PriceBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
}
