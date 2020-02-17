class UnitSerializer
    def initialize (unit)
        @unit = unit
    end

    def to_serialized_json
        options = {
            include: {
                resident: {
                    except: [:updated_at, :created_at, :password_digest]
                }
            },
            except: [:updated_at, :created_at]
        }
        @unit.to_json(options)
    end
end