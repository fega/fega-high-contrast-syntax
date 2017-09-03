module.exports = `
  type Starship {
    id: ID!
    name: String!
    length(unit: LengthUnit = METER): Float
    hero(episode: Episode): Character
    droid(id: ID!): Droid
  }
  # Tipos de consultas disponibles
  type Query {
    cards:[Card]
  }
  # Mutaciones disponibles
  type Mutation {
    cardAdd(card: inputCard): Card
  }
  # input para crear una entidad Card
  input inputCard {
    id: ID!
  }
  type Droid implements Character {
    id: ID!
    length(unit: LengthUnit = METER): Float
  }

  union SearchResult = Human | Droid | Starship
  scalar Date
  enum Episode {
    NEWHOPE
    EMPIRE
    JEDI
  }
`;
